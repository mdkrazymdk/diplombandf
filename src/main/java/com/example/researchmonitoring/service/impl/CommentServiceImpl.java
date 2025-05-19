package com.example.researchmonitoring.service.impl;

import com.example.researchmonitoring.dto.CommentDto;
import com.example.researchmonitoring.mapper.AppMapper;
import com.example.researchmonitoring.model.Comment;
import com.example.researchmonitoring.model.ResearchWork;
import com.example.researchmonitoring.model.User;
import com.example.researchmonitoring.repository.CommentRepository;
import com.example.researchmonitoring.repository.ResearchWorkRepository;
import com.example.researchmonitoring.repository.UserRepository;
import com.example.researchmonitoring.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepo;
    private final ResearchWorkRepository workRepo;
    private final UserRepository userRepo;
    private final AppMapper mapper;

    @Override
    public List<Comment> findByWork(Long workId) {
        return commentRepo.findByResearchWorkId(workId);
    }

    @Override
    public Comment add(CommentDto dto, String authorUsername) {
        Comment comment = new Comment();
        comment.setText(dto.getText());
        ResearchWork work = workRepo.findById(dto.getWorkId()).orElseThrow();
        User author = userRepo.findByUsername(authorUsername).orElseThrow();
        comment.setResearchWork(work);
        comment.setAuthor(author);
        return commentRepo.save(comment);
    }
}

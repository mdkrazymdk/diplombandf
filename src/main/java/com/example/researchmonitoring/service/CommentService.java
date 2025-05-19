package com.example.researchmonitoring.service;

import com.example.researchmonitoring.dto.CommentDto;
import com.example.researchmonitoring.model.Comment;
import java.util.List;

public interface CommentService {
    List<Comment> findByWork(Long workId);
    Comment add(CommentDto dto, String authorUsername);
}

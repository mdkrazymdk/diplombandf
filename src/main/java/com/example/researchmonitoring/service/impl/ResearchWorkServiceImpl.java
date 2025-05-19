package com.example.researchmonitoring.service.impl;

import com.example.researchmonitoring.model.ResearchWork;
import com.example.researchmonitoring.model.WorkStatus;
import com.example.researchmonitoring.repository.ResearchWorkRepository;
import com.example.researchmonitoring.repository.UserRepository;
import com.example.researchmonitoring.service.FileStorageService;
import com.example.researchmonitoring.service.ResearchWorkService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ResearchWorkServiceImpl implements ResearchWorkService {

    private final ResearchWorkRepository workRepo;
    private final UserRepository userRepo;
    private final FileStorageService storage;

    @Override
    @Transactional
    public ResearchWork createDraft(ResearchWork work, String username, MultipartFile file) {
        work.setStudent(
                userRepo.findByUsername(username)
                        .orElseThrow(() -> new IllegalArgumentException("Student not found: " + username))
        );
        work.setStatus(WorkStatus.DRAFT);
        if (file != null && !file.isEmpty()) {
            work.setFilePath(storage.store(file));
        }
        return workRepo.save(work);
    }

    @Override
    @Transactional
    public void submit(Long id, String username) {
        ResearchWork w = workRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Work not found"));
        if (!w.getStudent().getUsername().equals(username)) {
            throw new AccessDeniedException("Not your work");
        }
        w.setStatus(WorkStatus.SUBMITTED);
    }

    @Override
    @Transactional
    public void updateStatus(Long id, WorkStatus status, Integer grade) {
        ResearchWork w = workRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Work not found"));
        w.setStatus(status);
        if (status == WorkStatus.APPROVED) w.setGrade(grade);
    }

    @Override
    public List<ResearchWork> findByStatus(WorkStatus status) {
        return workRepo.findByStatus(status);
    }

    @Override
    public List<ResearchWork> findByStudent(String username) {
        return workRepo.findByStudentId(
                userRepo.findByUsername(username).orElseThrow().getId());
    }
}
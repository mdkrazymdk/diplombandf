package com.example.researchmonitoring.service;

import com.example.researchmonitoring.model.ResearchWork;
import com.example.researchmonitoring.model.WorkStatus;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ResearchWorkService {
    ResearchWork createDraft(ResearchWork work, String studentUsername, MultipartFile file);
    void submit(Long workId, String studentUsername);
    void updateStatus(Long workId, WorkStatus status, Integer grade);

    List<ResearchWork> findByStatus(WorkStatus status);
    List<ResearchWork> findByStudent(String studentUsername);
}

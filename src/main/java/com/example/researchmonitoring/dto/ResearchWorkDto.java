package com.example.researchmonitoring.dto;

import com.example.researchmonitoring.model.WorkStatus;
import lombok.Data;

@Data
public class ResearchWorkDto {
    private Long id;
    private Long studentId;
    private String title;
    private String description;
    private WorkStatus status;
    private Integer grade;
    private String fileUrl;
}
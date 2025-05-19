package com.example.researchmonitoring.dto;

import com.example.researchmonitoring.model.WorkStatus;
import lombok.Data;

@Data
public class StatusGradePayload {
    private WorkStatus status;
    private Integer grade; // optional
}
package com.example.researchmonitoring.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommentDto {
    private Long id;
    private Long workId;
    private String author;
    private String text;
    private LocalDateTime createdAt;
}
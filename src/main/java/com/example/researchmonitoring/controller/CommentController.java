package com.example.researchmonitoring.controller;

import com.example.researchmonitoring.dto.CommentDto;
import com.example.researchmonitoring.mapper.AppMapper;
import com.example.researchmonitoring.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService service;
    private final AppMapper mapper;

    @GetMapping("/{workId}")
    @PreAuthorize("hasRole('STUDENT') or hasRole('TEACHER')")
    public List<CommentDto> list(@PathVariable Long workId) {
        return service.findByWork(workId).stream().map(mapper::toDto).toList();
    }

    @PostMapping
    @PreAuthorize("hasRole('STUDENT') or hasRole('TEACHER')")
    public CommentDto add(@RequestBody CommentDto dto,
                          @AuthenticationPrincipal(expression = "username") String username) {
        return mapper.toDto(service.add(dto, username));
    }
}
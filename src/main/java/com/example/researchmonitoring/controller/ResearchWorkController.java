package com.example.researchmonitoring.controller;

import com.example.researchmonitoring.dto.ResearchWorkDto;
import com.example.researchmonitoring.dto.StatusGradePayload;
import com.example.researchmonitoring.mapper.AppMapper;
import com.example.researchmonitoring.model.WorkStatus;
import com.example.researchmonitoring.service.ResearchWorkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/works")
@RequiredArgsConstructor
public class ResearchWorkController {

    private final ResearchWorkService service;
    private final AppMapper mapper;

    /**
     * Создаёт или обновляет черновик научной работы (ROLE_STUDENT).
     */
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('STUDENT')")
    public ResearchWorkDto saveDraft(@RequestPart("data") ResearchWorkDto dto,
                                     @RequestPart(value = "file", required = false) MultipartFile file,
                                     @AuthenticationPrincipal(expression = "username") String username) {
        var entity = mapper.toEntity(dto);
        var saved  = service.createDraft(entity, username, file);
        return mapper.toDto(saved);
    }

    /**
     * Отправляет черновик на проверку (ROLE_STUDENT).
     */
    @PostMapping("/{id}/submit")
    @PreAuthorize("hasRole('STUDENT')")
    public void submit(@PathVariable Long id,
                       @AuthenticationPrincipal(expression = "username") String username) {
        service.submit(id, username);
    }

    /**
     * Обновляет статус работы и (опционально) оценку (ROLE_TEACHER).
     */
    @PatchMapping("/{id}/status")
    @PreAuthorize("hasRole('TEACHER')")
    public void updateStatus(@PathVariable Long id,
                             @RequestBody StatusGradePayload payload) {
        service.updateStatus(id, payload.getStatus(), payload.getGrade());
    }

    /**
     * Список работ по статусу для научрука (ROLE_TEACHER).
     */
    @GetMapping
    @PreAuthorize("hasRole('TEACHER')")
    public List<ResearchWorkDto> list(@RequestParam WorkStatus status) {
        return service.findByStatus(status).stream()
                .map(mapper::toDto)
                .toList();
    }
}
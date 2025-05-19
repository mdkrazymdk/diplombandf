package com.example.researchmonitoring.mapper;

import com.example.researchmonitoring.dto.CommentDto;
import com.example.researchmonitoring.dto.ResearchWorkDto;
import com.example.researchmonitoring.dto.UserDto;
import com.example.researchmonitoring.model.Comment;
import com.example.researchmonitoring.model.ResearchWork;
import com.example.researchmonitoring.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

/**
 * Универсальный MapStruct‑мэппер.
 * 1) ResearchWork ↔ ResearchWorkDto
 * 2) Comment → CommentDto (обратную сторону делаем вручную в CommentService)
 * 3) User ↔ UserDto
 */
@Mapper(
        componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE   // игнорируем служебные поля createdAt/updatedAt
)
public interface AppMapper {

    /* ===== ResearchWork ===== */

    @Mapping(source = "student.id", target = "studentId")
    @Mapping(source = "filePath",    target = "fileUrl")
    ResearchWorkDto toDto(ResearchWork work);

    @Mapping(source = "studentId", target = "student.id")
    @Mapping(source = "fileUrl",    target = "filePath")
    @Mapping(target = "createdAt",  ignore = true)
    @Mapping(target = "updatedAt",  ignore = true)
    ResearchWork toEntity(ResearchWorkDto dto);

    /* ===== Comment (только Entity → DTO) ===== */

    @Mapping(source = "researchWork.id", target = "workId")
    @Mapping(source = "author.username", target = "author")
    CommentDto toDto(Comment comment);

    // Обратное преобразование делаем в сервисе вручную (нужны ссылки на User и ResearchWork)

    /* ===== User ===== */
    UserDto toDto(User user);
    User    toEntity(UserDto dto);
}
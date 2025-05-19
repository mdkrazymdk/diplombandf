package com.example.researchmonitoring.repository;

import com.example.researchmonitoring.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByResearchWorkId(Long workId);
}
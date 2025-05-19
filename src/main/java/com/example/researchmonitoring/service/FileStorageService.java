package com.example.researchmonitoring.service;

import lombok.SneakyThrows;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileStorageService {

    private final Path root = Paths.get("uploads");

    @SneakyThrows
    public String store(MultipartFile file) {
        if (!Files.exists(root)) Files.createDirectories(root);
        String name = UUID.randomUUID() + "-" + file.getOriginalFilename();
        Files.copy(file.getInputStream(), root.resolve(name));
        return name;
    }
}
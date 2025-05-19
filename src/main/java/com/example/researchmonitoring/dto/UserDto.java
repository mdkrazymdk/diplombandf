package com.example.researchmonitoring.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class UserDto {
    @NotBlank
    private String username;

    @NotBlank
    private String password;

    // Только "STUDENT" или "TEACHER"
    @Pattern(regexp = "STUDENT|TEACHER", message = "Role must be STUDENT or TEACHER")
    private String role;
}

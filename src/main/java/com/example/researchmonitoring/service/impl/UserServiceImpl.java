package com.example.researchmonitoring.service.impl;

import com.example.researchmonitoring.dto.LoginDto;
import com.example.researchmonitoring.dto.UserDto;
import com.example.researchmonitoring.model.Role;
import com.example.researchmonitoring.model.User;
import com.example.researchmonitoring.repository.UserRepository;
import com.example.researchmonitoring.security.JwtUtil;
import com.example.researchmonitoring.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwt;

    @Override
    public void register(UserDto dto) {
        User u = new User();
        u.setUsername(dto.getUsername());
        u.setPassword(encoder.encode(dto.getPassword()));

        // Конвертация строки в enum
        u.setRole(Role.valueOf(dto.getRole().toUpperCase()));

        repo.save(u);
    }

    @Override
    public String login(LoginDto dto) {
        User u = repo.findByUsername(dto.getUsername()).orElseThrow();
        if (!encoder.matches(dto.getPassword(), u.getPassword())) {
            throw new IllegalArgumentException("Bad credentials");
        }
        return jwt.generateToken(u.getUsername());
    }
}

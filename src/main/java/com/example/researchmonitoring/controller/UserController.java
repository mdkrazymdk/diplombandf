package com.example.researchmonitoring.controller;

import com.example.researchmonitoring.dto.LoginDto;
import com.example.researchmonitoring.dto.UserDto;
import com.example.researchmonitoring.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public void register(@RequestBody UserDto dto) {
        userService.register(dto);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginDto dto) {
        return userService.login(dto);
    }
}
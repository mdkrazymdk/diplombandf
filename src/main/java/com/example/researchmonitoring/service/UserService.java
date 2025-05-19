package com.example.researchmonitoring.service;

import com.example.researchmonitoring.dto.LoginDto;
import com.example.researchmonitoring.dto.UserDto;

public interface UserService {
    void register(UserDto dto);
    String login(LoginDto dto);
}
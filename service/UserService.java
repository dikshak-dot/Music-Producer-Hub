package com.unknown.MusicProducerHub.service;

import com.unknown.MusicProducerHub.entity.User;
import com.unknown.MusicProducerHub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private BCryptPasswordEncoder encoder;

    public User register(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public User login(String email, String password){
        User user = repo.findByEmail(email).orElseThrow();

        if(!encoder.matches(password, user.getPassword())){
            throw new RuntimeException("Invalid Password!");
        }
        return user;
    }
}

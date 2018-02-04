package com.geeya.oauth.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping(value = {"/user", "/me"}, method = RequestMethod.GET)
    public Principal user(Principal principal) {
        return principal;
    }
}

package com.pancarte.ecommerce.security;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class HttpConfigurer extends AbstractHttpConfigurer<HttpConfigurer, HttpSecurity> {
    @Override
    public void init(HttpSecurity builder) throws Exception {
        builder.csrf(csrs -> csrs.disable()).formLogin(form -> form.disable()).httpBasic(basic -> basic.disable()).
                authorizeRequests((auth) -> {
                    auth.anyRequest().authenticated();
                }).sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
    }

    @Override
    public void configure(HttpSecurity builder) throws Exception {
        AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);


        builder.addFilter(new JwtAuthenticationFilter(authenticationManager)).addFilterBefore(new JwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    public static HttpConfigurer customHttpConfigurer() {
        return new HttpConfigurer();
    }
}

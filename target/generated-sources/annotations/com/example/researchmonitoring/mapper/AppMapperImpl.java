package com.example.researchmonitoring.mapper;

import com.example.researchmonitoring.dto.CommentDto;
import com.example.researchmonitoring.dto.ResearchWorkDto;
import com.example.researchmonitoring.dto.UserDto;
import com.example.researchmonitoring.model.Comment;
import com.example.researchmonitoring.model.ResearchWork;
import com.example.researchmonitoring.model.Role;
import com.example.researchmonitoring.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-05-19T14:42:03+0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.7 (Eclipse Adoptium)"
)
@Component
public class AppMapperImpl implements AppMapper {

    @Override
    public ResearchWorkDto toDto(ResearchWork work) {
        if ( work == null ) {
            return null;
        }

        ResearchWorkDto researchWorkDto = new ResearchWorkDto();

        researchWorkDto.setStudentId( workStudentId( work ) );
        researchWorkDto.setFileUrl( work.getFilePath() );
        researchWorkDto.setId( work.getId() );
        researchWorkDto.setTitle( work.getTitle() );
        researchWorkDto.setDescription( work.getDescription() );
        researchWorkDto.setStatus( work.getStatus() );
        researchWorkDto.setGrade( work.getGrade() );

        return researchWorkDto;
    }

    @Override
    public ResearchWork toEntity(ResearchWorkDto dto) {
        if ( dto == null ) {
            return null;
        }

        ResearchWork researchWork = new ResearchWork();

        researchWork.setStudent( researchWorkDtoToUser( dto ) );
        researchWork.setFilePath( dto.getFileUrl() );
        researchWork.setId( dto.getId() );
        researchWork.setTitle( dto.getTitle() );
        researchWork.setDescription( dto.getDescription() );
        researchWork.setStatus( dto.getStatus() );
        researchWork.setGrade( dto.getGrade() );

        return researchWork;
    }

    @Override
    public CommentDto toDto(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDto commentDto = new CommentDto();

        commentDto.setWorkId( commentResearchWorkId( comment ) );
        commentDto.setAuthor( commentAuthorUsername( comment ) );
        commentDto.setId( comment.getId() );
        commentDto.setText( comment.getText() );
        commentDto.setCreatedAt( comment.getCreatedAt() );

        return commentDto;
    }

    @Override
    public UserDto toDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setUsername( user.getUsername() );
        userDto.setPassword( user.getPassword() );
        if ( user.getRole() != null ) {
            userDto.setRole( user.getRole().name() );
        }

        return userDto;
    }

    @Override
    public User toEntity(UserDto dto) {
        if ( dto == null ) {
            return null;
        }

        User user = new User();

        user.setUsername( dto.getUsername() );
        user.setPassword( dto.getPassword() );
        if ( dto.getRole() != null ) {
            user.setRole( Enum.valueOf( Role.class, dto.getRole() ) );
        }

        return user;
    }

    private Long workStudentId(ResearchWork researchWork) {
        if ( researchWork == null ) {
            return null;
        }
        User student = researchWork.getStudent();
        if ( student == null ) {
            return null;
        }
        Long id = student.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    protected User researchWorkDtoToUser(ResearchWorkDto researchWorkDto) {
        if ( researchWorkDto == null ) {
            return null;
        }

        User user = new User();

        user.setId( researchWorkDto.getStudentId() );

        return user;
    }

    private Long commentResearchWorkId(Comment comment) {
        if ( comment == null ) {
            return null;
        }
        ResearchWork researchWork = comment.getResearchWork();
        if ( researchWork == null ) {
            return null;
        }
        Long id = researchWork.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String commentAuthorUsername(Comment comment) {
        if ( comment == null ) {
            return null;
        }
        User author = comment.getAuthor();
        if ( author == null ) {
            return null;
        }
        String username = author.getUsername();
        if ( username == null ) {
            return null;
        }
        return username;
    }
}

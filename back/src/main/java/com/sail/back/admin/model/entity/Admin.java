package com.sail.back.admin.model.entity;

 import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
//@AllArgsConstructor
@Table(name = "admin")
public class Admin extends User {


}

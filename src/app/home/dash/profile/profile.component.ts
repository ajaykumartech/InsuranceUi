import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserenvironmentsService } from 'src/app/userenvironments.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  dashboardData:any;
  profile:any
  profileImage:any
  notificationCount = 0
  data:any



  notificationItems = [
    {
      title: 'New message',
      message: 'You have a new message from John Doe.loremipsum You have a new message from John Doe.loremipsum You have a new message from John Doe.loremipsum You have a new message from John Doe.loremipsum',
      icon: 'email'
    },
    {
      title: 'Connection request',
      message: 'John Smith wants to connect with you.',
      icon: 'person_add'
    },
    {
      title: 'New job posting',
      message: 'There is a new job posting that might interest you.',
      icon: 'work'
    },
    {
      title: 'New message',
      message: 'You have a new message from John Doe.loremipsum',
      icon: 'email'
    },
    {
      title: 'Connection request',
      message: 'John Smith wants to connect with you.',
      icon: 'person_add'
    },
    {
      title: 'New job posting',
      message: 'There is a new job posting that might interest you.',
      icon: 'work'
    },
    {
      title: 'New message',
      message: 'You have a new message from John Doe.loremipsum',
      icon: 'email'
    },
    {
      title: 'Connection request',
      message: 'John Smith wants to connect with you.',
      icon: 'person_add'
    },
    {
      title: 'New job posting',
      message: 'There is a new job posting that might interest you.',
      icon: 'work'
    },
    {
      title: 'Connection request',
      message: 'John Smith wants to connect with you.',
      icon: 'person_add'
    },
    {
      title: 'New job posting',
      message: 'There is a new job posting that might interest you.',
      icon: 'work'
    },
    {
      title: 'New message',
      message: 'You have a new message from John Doe.loremipsum',
      icon: 'email'
    },
    {
      title: 'Connection request',
      message: 'John Smith wants to connect with you.',
      icon: 'person_add'
    },
    {
      title: 'New job posting',
      message: 'There is a new job posting that might interest you.',
      icon: 'work'
    },
    {
      title: 'Connection request',
      message: 'John Smith wants to connect with you.',
      icon: 'person_add'
    },
    {
      title: 'New job posting',
      message: 'There is a new job posting that might interest you.',
      icon: 'work'
    },
    {
      title: 'New message',
      message: 'You have a new message from John Doe.loremipsum',
      icon: 'email'
    },
    {
      title: 'Connection request',
      message: 'John Smith wants to connect with you.',
      icon: 'person_add'
    },
    {
      title: 'New job posting',
      message: 'There is a new job posting that might interest you.',
      icon: 'work'
    }

  ];



  
  constructor(private service: UserenvironmentsService,private route:Router) {}
  
  
  ngOnInit(){
    var token = localStorage.getItem('Token')
    this.service.getDashboardData(token).subscribe(response => {
      this.dashboardData = response
    })
    this.service.getProfilePic(token).subscribe(response => {
      this.profile = response
      this.profileImage = this.profile.ClientUser.profileIconBase64
    })
    // this.service.getNotificationCount(token).subscribe(response => {
    //   this.NotificationCount = response
    // })

    this.service.getNotificationCount(token).subscribe(response => {
      this.data = response
      for(var i=0;i<this.data.length;i++){
        if(this.data[i].state == 0)
          this.notificationCount +=1
      }
    })
  }

  signout(){
     localStorage.removeItem('Token')
     this.route.navigate([''])
  }
  
}
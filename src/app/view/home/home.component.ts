import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog';
import { Router } from '@angular/router';
import { ExpireSessionHandlerService } from 'src/app/expire-session-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('drawer') drawer?:MatDrawer
  //@ViewChild('dialog') logoutDialog:MatDialogRef

  constructor(public dialog:MatDialog,private router:Router,private sessionExpireService:ExpireSessionHandlerService,private matSnackBar: MatSnackBar) { }
  
  tabOption:string = 'home'
  
  ngOnInit(): void {
    
    this.onUserSessionExpired()
    //this.parmurl=this.activatedroute.snapshot.params[‘id’];
  }

  getActiveOption(option:string)
  {
    
    this.tabOption = option

  }

  toggleSidebar()
  {
    
    this.drawer?.toggle()
    
  }

  ngAfterViewInit()
  {
    
    console.log(this.drawer)

  }


  onUserSessionExpired()
  {

    this.sessionExpireService.isSessionExpired.subscribe({next:value =>{
      
      if(value)
      {
      
        this.matSnackBar.open("Session expired, try to login","Login").dismissWithAction = () =>{
          localStorage.setItem('token','')
          this.router.navigate(['/','auth'])
        }
      
      }else{

        this.matSnackBar.dismiss()
      }
     
    }})

  }

  
  logout()
  {
    
    this.dialog.open(ConfirmDialogComponent,{
     
      width:'400px',
      height:'150px'
      
    }).afterClosed().subscribe(result =>{

      if(result.confirm)
      {
        localStorage.setItem('token','')
        this.router.navigate(['/','auth'])
      }
      
    })
    
  }

}


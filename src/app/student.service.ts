import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class studentService{
      private baseUrl = 'http://localhost:8000/student';

      private constructor(private http: HttpClient){}

    getStudentList():Observable<any>{
        return this.http.get(this.baseUrl);
    }

    getStudent(id):Observable<any>{
        return this.http.get(this.baseUrl+'/'+id);
    }

    createStudent(student:object):Observable<any>{
        return this.http.post(this.baseUrl,student);
    }

    updateStudent(id:number, student:object): Observable<any>{
        return this.http.put(this.baseUrl+'/'+id,student);
    }

    deleteStudent(id):Observable<any>{
        return this.http.delete(this.baseUrl+'/'+id);
    }    

  }
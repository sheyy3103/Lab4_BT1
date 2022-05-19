class SinhVien{

    code: string;
    name: string;
    age: number;
    gender: string;
    location: string;
    classname: string;

    constructor(code:string,name:string,age:number,gender:string,location:string,classname:string){
        this.code = code;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.location = location;
        this.classname = classname;
    }
}
class StudentService {
    data: Array<SinhVien> = new Array();
    constructor() {
    // gán thuộc tính data từ phương thức setData trả về mảng đối tượng
    this.data = this.setData();
    }
    // phương thức trả về mảng các đối tượng có sẵn
    setData(): Array<SinhVien>{
        let std1: SinhVien = {
            code: 'B9255',
            name: "Ngô Tiến Đạt",
            age: 18,
            gender: 'Nam',
            location: 'Hà Nội',
            classname: 'C2110H1',
        };
        let std2: SinhVien = {
            code: 'C1248',
            name: "Emma Waston",
            age: 22,
            gender: 'Nữ',
            location: 'London',
            classname: 'C2009S',
        };
        let std3: SinhVien = {
            code: 'A0021',
            name: "Kelvin Huỳnh Alves",
            age: 17,
            gender: 'Nam',
            location: 'Madrid',
            classname: 'C2211G',
        };
        let data:Array<SinhVien> = new Array(std1,std2,std3);
        return data;
    }
    showListTotable(table_id: string = 'tbody-list'): void {
        let tbody: any = document.getElementById(table_id);
        let _tr = '';
        for (var obj of this.data) {
            _tr += `<tr>
                <td>${obj.code}</td>
                <td>${obj.name}</td>
                <td>${obj.age}</td>
                <td>${obj.gender}</td>
                <td>${obj.location}</td>
                <td>${obj.classname}</td>
            </tr>`;
        }
        tbody.innerHTML = _tr;
    }
}
var stdService = new StudentService();
stdService.showListTotable();

import { IUserSession } from "@/types/types";

const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 20);

export const userdataMock: IUserSession[] = [
    {
    "name": "Carlos",
    "lastname": "Olivera",
    "motherLastName": "Mispireta",
    "username": "colivera",           
    "email": "colivera@ins.gob.pe", 
    "phone": "919179785",
    "address": "Av. Belaunde 2345",
    "province": "Lima",
    "location": "Lima",  
    "roles": [
        {
            rolName: "Consulta",
            icon: "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z",
            router: false,
            options:[
                    {optionName: "Usuarios",
                     router: false,   
                     subOptions: [{subOptionsName: "Usuarios", router: true},
                                  {subOptionsName: "No atendidos", router: true}]
                    },    
                    {optionName: "Solicitudes",
                     router: false,   
                     subOptions: [{subOptionsName: "Atender", router: true},
                                  {subOptionsName: "requests", router: true}]
                    }, 
                    {optionName: "Solicitudes Rechazadas",
                     router: true, 
                     subOptions: []},    
                    ]
        },
              ]
    },
]
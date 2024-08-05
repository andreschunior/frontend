export const sidebarOptionsAdmin = [
        {
            rolName: "Consulta",
            icon: "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z",
            router: false,
            options:[
                    {optionName: "Usuarios",
                     router: false,   
                     subOptions: [{subOptionsName: "Ver todos los usuarios", router: true},
                                  {subOptionsName: "Usuarios atendidos", router: true},
                                  {subOptionsName: "Usuarios no atendidos", router: true}]
                    },    
                    {optionName: "Solicitudes",
                     router: false,   
                     subOptions: [{subOptionsName: "Relevamientos", router: true},
                                  {subOptionsName: "Solicitudes rechazadas", router: true}]
                    }, 
                    {optionName: "Servicios",
                     router: true, 
                     subOptions: []},  
                   
                    ]
        },
        {
            rolName: "Pagos",
            icon: "M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
            router: true,
            options:[],
        },
        {
            rolName: "Equipos",
            icon: "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z",
            router: false,
            options:[
                   
                     {optionName: "Equipos",
                        router: true,   
                        subOptions: []
                       }, 
                       { optionName: "Agregar Equipo",
                        router: true,   
                        subOptions:[]}
                     
                    ]
        },
 ]




 export const sidebarOptionsUser = [
    {
        rolName: "Consulta",
        icon: "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z",
        router: false,
        options:[
                {optionName: "Cuenta",
                 router: false,   
                 subOptions: [{subOptionsName: "Estado de Cuentas", router: true},
                              {subOptionsName: "Proxima facturación", router: true},
                              {subOptionsName: "Cambiar de PLAN", router: true}]
                },    
                {optionName: "Servicios",
                 router: false,   
                 subOptions: [{subOptionsName: "Servicio Técnico", router: true},
                              {subOptionsName: "Test de Velocidad", router: true}]
                }, 
                {optionName: "Actualizacion de Datos",
                 router: true, 
                 subOptions: []},    
                ]
    },
]

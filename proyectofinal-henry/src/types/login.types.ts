export interface ILoginProps {
      email: string;    
      password: string | null; 
}

export interface ILoginPropsError {
      email?: string;    
      password?: string; 
      [key: string]: string | undefined;
}

export interface ITokenSession {
      succes: string;
      token: string;
      issuedAt: string;
      expiresAt: string;
      agente: string;
      user: {
            id: string;
            email: string;
            nombre: string;
            roles: string[];
          };
      keyProperty: string | null;    
      }

      export interface IUserSession {
            message: string;
            id: string;
            isAdmin: boolean;
            createdAt: string;  
            agente: string;
            nombre: string;
            telefono: string;
            direccion: string;
            latitud: number;
            longitud: number;
            documento: number;
            email: string;
            razonSocial: string;
            codigoPostal: string;
            domicilioInstal: string;
            localidadInstal: string;
            telefonoInstal: number;
            emailInstal: string;
            observaciones: string;
            senalConexion: string;
            facturas: string[];
            imgUrl: string;
        }

export interface IUserData {
      tokenData: ITokenSession;    
      userData: IUserSession; 
  }  


         





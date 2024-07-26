export interface IToken {
      token: string;
}

export interface IUserData {
        token: string;    
        user: IUserSession; 
  }

export interface ILoginProps {
        username: string;    
        password: string; 
  }

export interface ILoginPropsError {
        username?: string;    
        password?: string; 
        [key: string]: string | undefined;
  }

       
export interface IUserSession {
            name: string;
            lastname: string;
            motherLastName: string;
            username: string;
            email: string;
            phone: string;
            address: string;
            province: string;
            location: string;
            roles: IRole[];
        }
        
        export interface ICampus {
          id: string;
          name: string;
          image: string;
        }
    export interface IRole {
            rolName: string;
            icon: string;
            router: boolean;
            options: IOption[];
      }

      export interface IOption {
            optionName: string;
            router: boolean;
            subOptions: ISubOption[];
          }

          export interface ISubOption {
            subOptionsName: string;
            router: boolean;
          }    

          export interface RoleProps {
            role: {
                rolName: string;
                icon: string;
                router: boolean;
                options: OptionType[];
            };
        }

        export interface OptionType {
            optionName: string;
            router: boolean;
            subOptions: SubOptionType[];
        }
        
        export interface SubOptionType {
            subOptionsName: string;
            router: boolean;
        }

     

      export interface IAuthContextProps {
            userData: IUserData | null;
            login: (userData: IUserData) => void;
            logout: (userData: IUserData | null) => void;
          }

          export interface IProviderProps {
            children: React.ReactElement
        }

        export interface ISidebarContextProps {
            btnFixed: boolean;
            sidebarFixed: (newState: boolean) => void;
            isExpanded: boolean;
            sidebarExpand: (newState: boolean) => void;
            isDropdown: string | null;
            menuDropdown: (newState: string | null ) => void;
            isDropdownSub: string | null;
            subMenuDropdown: (newState: string | null ) => void;
          }

          export interface ICampusContextProps {
            campusSelect: string | undefined;
            handleCampusSelect: (select: string) => void;
          }

          
          export interface IDarkContextProps {
            darkMode: boolean;
            handleDarkMode: (newState: boolean) => void;
          }

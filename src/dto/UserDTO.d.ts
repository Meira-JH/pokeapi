export interface UserDTO {
  email: string,
  password: string,
}

export interface UserDataBaseDTO extends UserDTO {
  id: string,
  role: string
  device?: string,
};

export interface UserLoginRequestDTO extends UserDTO {
  role: string
  device?: string,
};

interface FormDataInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface NewInterface {}

interface MainDataInterface {
  name: string;
  email: string;
}
interface ResponseDataInterface {
  code: number;
  message: string;
  ok: boolean;
  userData: MainData;
}

interface EventModalPropInterface {
  message: string | undefined;
  additionalButton: boolean;
  onClickFunction: () => void;
}

interface LoginDataInterface {
  message: string;
  code: number;
  ok: boolean;
}

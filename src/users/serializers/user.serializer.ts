import { Exclude, Expose } from "class-transformer";

export class UserSerializer {
  @Exclude()
  _id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;
}
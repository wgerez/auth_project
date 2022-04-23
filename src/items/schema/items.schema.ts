import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ItemsDocument = Items & Document;
@Schema()
export class Items {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);

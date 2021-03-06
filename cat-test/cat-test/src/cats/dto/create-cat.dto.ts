import {IsNotEmpty, Length} from "class-validator";

export class CreateCatDto {

    @IsNotEmpty({
        message: `Cat should have a name`
    })
    @Length(3, 15)
    readonly name: string;

    @IsNotEmpty({
        message: `Cat should have a price`
    })
    readonly price: number;

    @IsNotEmpty({
        message: `Cat should have a color`
    })
    readonly color: string;

    @IsNotEmpty({
        message: `Cat should have a breed`
    })
    readonly name_breed: string;

    @IsNotEmpty({
        message: `Cat should have a breed`
    })
    readonly url: string;
}
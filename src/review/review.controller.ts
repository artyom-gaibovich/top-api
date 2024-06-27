import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post} from '@nestjs/common';
import {ProductModel} from "../product/product.model";
import {ReviewModel} from "./review.model";
import {FindProductDto} from "../product/dto/find-product.dto";

@Controller('review')
export class ReviewController {

    @Post("create")
    async create(@Body() dto : Omit<ProductModel, "_id">) {

    }
    @Delete(':id')
    async delete(@Param() id : string) {

    }

    @Get("byProduct/:productId")
    async get(@Param("productId") productId : string) {

    }



}

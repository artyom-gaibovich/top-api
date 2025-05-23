import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post} from '@nestjs/common';
import {ProductModel} from "../product/product.model";
import {FindProductDto} from "../product/dto/find-product.dto";
import {TopPageModel} from "./top-page.model";
import {FindTopPageDto} from "./dto/find-top-page.dto";

@Controller('top-page')
export class TopPageController {
    @Post("create")
    async create(@Body() dto : Omit<TopPageModel, "_id">) {


    }
    @Get(":id")
    async get(@Param() id : string) {

    }

    @Delete(':id')
    async delete(@Param() id : string) {

    }

    @Patch(':id')
    async patch(@Param() id : string, @Body() dto : TopPageModel) {

    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto : FindTopPageDto) {

    }
}

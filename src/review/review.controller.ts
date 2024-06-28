import {Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import {ProductModel} from "../product/product.model";
import {ReviewModel} from "./review.model";
import {FindProductDto} from "../product/dto/find-product.dto";
import {CreateReviewDto} from "./dto/create-review.dto";
import {ReviewService} from "./review.service";
import {REVIEW_NOT_FOUND} from "./review.constants";
import {Types} from "mongoose";

@Controller('review')
export class ReviewController {

    constructor(private readonly reviewService : ReviewService) {
    }
    @Post("create")
    async create(@Body() dto : CreateReviewDto) {
        return await this.reviewService.create(dto)
    }
    @Delete(':id')
    async delete(@Param() id : string) {
        const deletedDoc = await this.reviewService.delete(id)
        if (!deletedDoc) {
            throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
        }

    }

    @Delete("byProduct/:productId")
    async deleteByProductId(productId : string) {
        return await this.reviewService.deleteByProductId(productId)
    }

    @Get("byProduct/:productId")
    async get(@Param("productId") productId : string) {
        return await this.reviewService.findByProductId(productId)
    }





}

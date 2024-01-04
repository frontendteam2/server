import express from 'express';
import * as reviewRepository from "../repository/reviewRepository.js";

export async function getReview(req, res){
  const {url,page}=req.params
  
  const result =await reviewRepository.getReview(url,page);
  res.json(result)
}

export async function postReview(req,res){
  const{url,phone,name,content}=req.body
  const result = await reviewRepository.postReview(url,phone,name,content)
  console.log(result)
}
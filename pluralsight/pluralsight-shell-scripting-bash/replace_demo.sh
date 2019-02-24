#!/bin/bash

i="mytxt.txt"

echo ${i/txt/jpg}

echo ${i/%txt/jpg}

echo ${i//txt/jpg}

echo ${i//txt/}

echo ${i/%txt/}

echo ${i%txt}

echo ${i#txt}

echo ${i/[yx]/a}

echo ${i//[yx]/a}
import axios from "axios";
import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    });
}

export function searchMealsByLetter({ commit }, letter) {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(({ data }) => {
      commit("setMealsByLetter", data.meals);
    });
}

export function searchMealsByIngredient({ commit }, ing) {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
    .then(({ data }) => {
      commit("setMealsByIngredients", data.meals);
    });
}

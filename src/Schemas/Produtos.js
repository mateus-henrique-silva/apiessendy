import { Schema, model } from "mongoose";

const Produtos = new Schema({
  comprimento: String,
  produto: String,
  modelo: String,
  tipo: String,
  preco: String,
  largura: String,
  altura: String,
  descricao: String,
  modo: String,
  urlFoto: String,
  urlFoto2: String,
  urlFoto5: String,
  urlFoto6: String,
  urlFoto7: String,
  urlFoto8: String,
  descricao: String,
  modo: String,
  descricao2: String,
  modo2: String,
  descricao3: String,
  modo3: String,
  descricao4: String,
  modo4: String,
  tipodecabelo: String,
});

export default model("Produtos", Produtos);

import Produtos from "../Schemas/Produtos";

class ProdutoController {
  async index(req, res) {
    const Produtolist = await Produtos.find();

    return res.json(Produtolist);
  }
  async index2(req, res) {
    const { modelo } = req.query;
    const Produtolist = await Produtos.find({ modelo: modelo });

    return res.json(Produtolist);
  }
  async index3(req, res) {
    const { tipo } = req.query;
    const Produtolist = await Produtos.find({ tipo: tipodecabelo });

    return res.json(Produtolist);
  }

  async store(req, res) {
    const {
      comprimento,
      produto,
      modelo,
      tipo,
      preco,
      largura,
      altura,
      descricao,
      modo,
      descricao2,
      modo2,
      descricao3,
      modo3,
      descricao4,
      modo4,
      tipodecabelo,
      urlFoto,
      urlFoto2,
      urlFoto5,
      urlFoto6,
      urlFoto7,
      urlFoto8,
    } = req.body;

    const Produtolist = await Produtos.create({
      produto,
      modelo,
      tipo,
      preco,
      largura,
      altura,
      descricao,
      modo,
      descricao2,
      modo2,
      descricao3,
      modo3,
      descricao4,
      modo4,
      tipodecabelo,
      urlFoto,
      urlFoto2,
      urlFoto5,
      urlFoto6,
      urlFoto7,
      urlFoto8,
    });

    return res.json(Produtolist);
  }
}

export default new ProdutoController();

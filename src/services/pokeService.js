import BaseService from "./baseService";

const PokeService = {
  getAll(offSet, limit) {
    return BaseService.get(`/pokemon?offset=${offSet}&limit=${limit}`);
  },
  getDetails(url) {
    return BaseService.get(url);
  },
  getByType(type) {
    return BaseService.get(`/type/${type}`);
  },
  search(name) {
    return BaseService.get(`/pokemon/${name}`);
  },
};

export default PokeService;

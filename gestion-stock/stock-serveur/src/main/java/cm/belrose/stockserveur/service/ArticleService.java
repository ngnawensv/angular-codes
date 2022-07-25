package cm.belrose.stockserveur.service;

import cm.belrose.stockserveur.model.Article;

import java.util.List;
import java.util.Optional;

public interface ArticleService {

     Optional<Article> findById(Long id) throws Exception;

     List<Article> findAll() throws Exception;

     Article save(Article article) throws Exception;

     Article update(Article article) throws Exception;

     void delete(Article article) throws Exception;
}

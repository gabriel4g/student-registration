// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/student-registration$0.0.1/templates/alunos.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://kit.fontawesome.com/c25abe3fb5.js crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script><title>Alunos</title></head><body class=\"bg-white text-dark\"><div class=container>");

  if (data.error_messages != "") {
    out.w("<div class=\"p-3 mb-2 bg-danger text-white\" style=\"text-align: center;\"><i class=\"fas fa-bomb\" style=\"margin-right: 2%;\"></i>" +
      marko_escapeXml(data.error_messages) +
      "</div>");
  }

  if (data.sucess_message != "") {
    out.w("<div class=\"p-3 mb-2 bg-success text-white\" style=\"text-align: center;\"><i class=\"fas fa-check-circle\" style=\"margin-right: 2%;\"></i>" +
      marko_escapeXml(data.sucess_message) +
      "</div>");
  }

  out.w("<h1 style=\"text-align: center; font-weight: bolder;\">ALUNOS</h1><a href=/form class=\"btn btn-success\" style=\"margin: 2%;\"><i class=\"fas fa-user-plus\"></i></a><table class=table><thead><th>Id</th><th>Nome</th><th>Curso</th><th>Opções</th></thead>");

  var $for$0 = 0;

  marko_forOf(data.results, function(aluno, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(aluno.id) +
      "</td><td>" +
      marko_escapeXml(aluno.nome) +
      "</td><td>" +
      marko_escapeXml(aluno.curso) +
      "</td><td><a" +
      marko_attr("href", "/form/" + (aluno.id == null ? "" : aluno.id)) +
      " class=\"btn btn-warning\" style=\"margin-right: 2%;\"><i class=\"fas fa-edit\"></i></a><a" +
      marko_attr("href", "/alunos/delete/" + (aluno.id == null ? "" : aluno.id)) +
      " class=\"btn btn-danger\"><i class=\"fas fa-trash-alt\"></i></a></td></tr>");
  });

  out.w("</table></div><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js integrity=sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js integrity=sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/student-registration$0.0.1/templates/alunos.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

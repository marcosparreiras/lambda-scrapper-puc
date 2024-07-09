import { describe } from '@jest/globals';
import { CheerioNFEParser } from './cheerio-nfe-parser';

describe('Cheeiro-nfe-parser', () => {
    let cheerioNFEParser: CheerioNFEParser;
    const nfeHTML = `
<!DOCTYPE html>
<html lang="pt_BR" xmlns="http://www.w3.org/1999/xhtml"><head id="j_idt2">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="author" content="SEF - LRP, MSB, R" />
		<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
		<link rel="shortcut icon" type="image/x-icon" href="/portalnfce/resourcelib/images/favicon.ico" />
		<title>Secretaria de Estado de Fazenda de Minas Gerais - SEF/MG</title><link type="text/css" rel="stylesheet" href="/portalnfce/javax.faces.resource/theme.css.xhtml?ln=primefaces-bootstrap" /><link type="text/css" rel="stylesheet" href="/portalnfce/javax.faces.resource/fa/font-awesome.css.xhtml?ln=primefaces&amp;v=7.0" /><link type="text/css" rel="stylesheet" href="RES_NOT_FOUND" /><link type="text/css" rel="stylesheet" href="/portalnfce/javax.faces.resource/primeicons/primeicons.css.xhtml?ln=primefaces&amp;v=7.0" /><link type="text/css" rel="stylesheet" href="/portalnfce/javax.faces.resource/css/bootstrap.min.css.xhtml?ln=resourcelib" /><link type="text/css" rel="stylesheet" href="/portalnfce/javax.faces.resource/css/open-sans.css.xhtml?ln=resourcelib" /><link type="text/css" rel="stylesheet" href="/portalnfce/javax.faces.resource/css/main.css.xhtml?ln=resourcelib" /><link type="text/css" rel="stylesheet" href="/portalnfce/javax.faces.resource/components.css.xhtml?ln=primefaces&amp;v=7.0" /><script type="text/javascript" src="/portalnfce/javax.faces.resource/jquery/jquery.js.xhtml?ln=primefaces&amp;v=7.0"></script><script type="text/javascript" src="/portalnfce/javax.faces.resource/jquery/jquery-plugins.js.xhtml?ln=primefaces&amp;v=7.0"></script><script type="text/javascript" src="/portalnfce/javax.faces.resource/core.js.xhtml?ln=primefaces&amp;v=7.0"></script><script type="text/javascript" src="/portalnfce/javax.faces.resource/components.js.xhtml?ln=primefaces&amp;v=7.0"></script><script type="text/javascript" src="/portalnfce/javax.faces.resource/printer/printer.js.xhtml?ln=primefaces&amp;v=7.0"></script><script type="text/javascript" src="/portalnfce/javax.faces.resource/validation/validation.js.xhtml?ln=primefaces&amp;v=7.0"></script><script type="text/javascript" src="/portalnfce/javax.faces.resource/validation/beanvalidation.js.xhtml?ln=primefaces&amp;v=7.0"></script><script type="text/javascript">if(window.PrimeFaces){PrimeFaces.settings.locale='pt_BR';PrimeFaces.settings.validateEmptyFields=true;PrimeFaces.settings.considerEmptyStringNull=false;}</script><!--[if lt IE 9]>   <script src="/portalnfce/resources/js/html5shiv.js"></script>  <script src="/portalnfce/resources/js/respond.min.js"></script> <![endif]--><script type="text/javascript" src="/portalnfce/javax.faces.resource/js/pf_localePt_BR.js.xhtml?ln=resourcelib"></script><script type="text/javascript" src="/portalnfce/javax.faces.resource/js/geral.js.xhtml?ln=resourcelib"></script></head><body><div id="jquery" class="ui-panel ui-widget ui-widget-content ui-corner-all" style="display:none" data-widget="widget_jquery"><div id="jquery_content" class="ui-panel-content ui-widget-content"></div></div><script id="jquery_s" type="text/javascript">$(function(){PrimeFaces.cw("Panel","widget_jquery",{id:"jquery"});});</script>
	<div id="wrap">
		<div class="container">
<form id="formPrincipal" name="formPrincipal" method="post" action="/portalnfce/sistema/qrcode.xhtml" class="form-horizontal" enctype="multipart/form-data">
<input type="hidden" name="formPrincipal" value="formPrincipal" />


	<div class="navbar navbar-default navbar-fixed-top hidden-print">
		<div class="navbar-header">
			<a href="/portalnfce/index.xhtml"><img src="/portalnfce/sistema/images/logo_small.png" alt="Intranet SEF - Secretaria de Estado de Fazenda" />
			</a>
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
			</button>
		</div>
		<div class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li>
					<a href="/portalnfce/sistema/consultaarg.xhtml">Consultar NFC-e
					</a>
				</li>
				<li>
					<a href="/portalnfce/sistema/consultainutilizacao.xhtml">Consultar Inutilização
					</a>
				</li> 
			</ul>
		</div>
	</div>

				<div id="page-content-wrapper">
					<div class="container-fluid">
		<div class="table-responsive"><div id="formPrincipal:content-template-consulta" class="ui-outputpanel ui-widget">
				<h4>
					<h1>
					</h1>
				</h4>
		<div class="container">
				<table class="table text-center">
					<thead style="background-color: white;">
						<tr>
							<th class="text-center"><img id="formPrincipal:imgLogobpe1" src="/portalnfce/sistema/images/logo.png" alt="Intranet SEF - Secretaria de Estado de Fazenda" height="52px" width="52px" />Nota Fiscal de Consumidor Eletrônica (NFC-e)</th>
						</tr>
						<tr>
							<th class="text-center text-uppercase"><H4>
									<b>COMERCIAL DAHANA LIMITADA SN 422</b>
								</H4></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="border-top: 0px;">CNPJ: 00.070.509/0030-45, Inscrição Estadual: 062885360.28-47</td>
						</tr>
						<tr>
							<td style="border-top: 0px; display: block; font-style: italic;">R GRAO MOGOL, 202, CARMO, 3106200 - BELO HORIZONTE, MG</td>
						</tr>
					</tbody>
				</table>
				<br />

				<div class="input-group">
					<span class="input-group-addon"><i class="fa fa-search"></i></span>
					<input id="inputFilterProducts" type="text" class="form-control" name="inputFilterProducts" placeholder="Filtar ítens..." />
				</div>
				<br />

				<table class="table table-striped">
					<tbody id="myTable">
							<tr>
								<td><h7>LEITE LVIDA PORTO ALEGRE 1L INTEG
									</h7>(Código: 154923)</td>
								<td>Qtde total de ítens: 20.0000</td>
								<td>UN: UN</td>
								<td>Valor total R$: R$ 105,80</td>
							</tr>
							<tr>
								<td><h7>CAFE PO FINO-GRAO 500G PC TRAD
									</h7>(Código: 93567)</td>
								<td>Qtde total de ítens: 2.0000</td>
								<td>UN: UN</td>
								<td>Valor total R$: R$ 33,98</td>
							</tr>
							<tr>
								<td><h7>ACUCAR CRISTAL DELTA 5kg-PC
									</h7>(Código: 156184)</td>
								<td>Qtde total de ítens: 1.0000</td>
								<td>UN: UN</td>
								<td>Valor total R$: R$ 17,90</td>
							</tr>
					</tbody>
				</table>
				<br />
				<div class="row">
					<div class="col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-8">
						<strong>Qtde total de ítens
						</strong>
					</div>
					<div class="col-lg-2">
						<strong>3</strong>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-8">
						<strong>Valor total R$
						</strong>
					</div>
					<div class="col-lg-2">
						<strong>157.68</strong>
					</div>
				</div>
				<br />
				<table class="table">
					<tbody>
							<div class="row">
								<div class="col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-8">
									<strong>Valor pago R$
									</strong>
								</div>
								<div class="col-lg-2">
									<strong>155.68</strong>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-4 col-xs-offset-4 col-lg-8 col-lg-offset-8">
									<strong>Forma de Pagamento
									</strong>
								</div>
								<div class="col-lg-4">
									<strong><div id="formPrincipal:j_idt77:0:j_idt85">01 - Dinheiro</div></strong>
								</div>
							</div>
					</tbody>
				</table>
				<br />
				<div id="accordion" role="tablist">
					<div class="panel panel-default">
						<div class="panel-heading panel-collapse collapsed" role="tab" id="heading5" data-toggle="collapse" href="#collapse5" aria-expanded="false" aria-controls="collapseTwo">
							<h4 class="panel-title">
								<div class="col-md-1 panel-plus" align="center"></div>Consumidor
							</h4>
						</div>
						<div id="collapse5" class="collapse" role="tabpanel" data-parent="#accordion" style="padding-left: 5%;">
							<br />
							<table class="table table-hover">
								<thead>
									<tr>
										<th width="25%">Nome / Razão Social</th>
										<th width="25%">UF</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width="25%"></td>
										<td width="25%"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading panel-collapse collapsed" role="tab" id="heading1" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							<h4 class="panel-title">
								<div class="col-md-1 panel-plus" align="center"></div>Chave de acesso
							</h4>
						</div>
						<div id="collapseTwo" class="collapse" role="tabpanel" data-parent="#accordion" style="padding-left: 5%;">
							<br />
							<table class="table table-hover">
								<tbody>
									<tr>
										<td style="border-top: 0px;">31-24/06-00.070.509/0030-45-65-206-000.114.489-133.763.8029</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading panel-collapse collapsed" role="tab" id="heading2" data-toggle="collapse" href="#collapse3" aria-expanded="false" aria-controls="collapseTwo">
							<h4 class="panel-title">
								<div class="col-md-1 panel-plus" align="center"></div>Informações Complementares de Interesse do Contribuinte
							</h4>
						</div>
						<div id="collapse3" class="collapse" role="tabpanel" data-parent="#accordion" style="padding-left: 5%;">
							<br />
							<table class="table table-hover">
								<thead>
									<tr>
										<th>Descrição</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>422.6.194041.75210.1</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading panel-collapse collapsed" role="tab" id="heading3" data-toggle="collapse" href="#collapse4" aria-expanded="false" aria-controls="collapseTwo">
							<h4 class="panel-title">
								<div class="col-md-1 panel-plus" align="center"></div>Informações gerais da Nota
							</h4>
						</div>
						<div id="collapse4" class="collapse" role="tabpanel" data-parent="#accordion" style="padding-left: 5%;">
							<br />
							<h5>
								<b>Emitente</b>
							</h5>
							<table class="table table-hover">
								<thead>
									<tr>
										<th width="25%">Nome / Razão Social</th>
										<th width="25%">CNPJ</th>
										<th width="25%">Inscrição Estadual</th>
										<th width="25%">UF</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width="25%">COMERCIAL DAHANA LIMITADA SN 422</td>
										<td width="25%">00.070.509/0030-45</td>
										<td width="25%">062885360.28-47</td>
										<td width="25%">MG</td>
									</tr>
								</tbody>
							</table>
							<br /> <br />
							<table class="table table-hover">
								<thead>
									<tr>
										<th>Destino da operação</th>
										<th>Consumidor final</th>
										<th>Presença do Comprador</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><div id="formPrincipal:j_idt172">1 - Operação Interna</div></td>
										<td><div id="formPrincipal:j_idt180">1 - Sim</div></td>
										<td><div id="formPrincipal:j_idt186">1 - Operação presencial</div></td>
									</tr>
								</tbody>
							</table>
							<br />
							<table class="table table-hover">
								<thead>
									<tr>
										<th width="20%">Modelo</th>
										<th width="20%">Série</th>
										<th width="20%">Número</th>
										<th width="20%">Data Emissão</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>65</td>
										<td>206</td>
										<td>114489</td>

										<td>07/06/2024 09:26:37</td>
									</tr>
								</tbody>
							</table>
							<br />
							<table class="table table-hover">
								<thead>
									<tr>
										<th width="33%">Valor total do serviço</th>
										<th width="33%">Base de Cálculo ICMS</th>
										<th width="33%">Valor ICMS</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width="33%">R$ 155,68</td>
										<td width="33%">R$ 12,44</td>
										<td width="33%">R$ 2,24</td>

									</tr>
								</tbody>
							</table>
							<br />
							<table class="table table-hover">
								<thead>
									<tr>
										<th width="50%">Protocolo</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width="50%">131243046900613</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
		</div>
		<script type="text/javascript">
			$(function() {
				$(".nav , .navbar-nav").hide();
				$("#inputFilterProducts").on(
						"keyup",
						function() {
							var value = $(this).val().toLowerCase();
							$("#myTable tr").filter(
									function() {
										$(this).toggle(
												$(this).text().toLowerCase()
														.indexOf(value) > -1)
									});
						});
			});
		</script>
	<br />
	<div class="col-xs-12 col-md-2 pull-right"><script type="text/javascript" src="/portalnfce/javax.faces.resource/jsf.js.xhtml?ln=javax.faces"></script><a id="formPrincipal:j_idt243" href="#" onclick="jsf.util.chain(this,event,'PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(\'formPrincipal:content-template-consulta\').jqprint();return false;','mojarra.jsfcljs(document.getElementById(\'formPrincipal\'),{\'formPrincipal:j_idt243\':\'formPrincipal:j_idt243\'},\'\')');return false" class="btn btn-primary center-block">Imprimir
			<i class="fa fa-print"></i></a>
	</div>
					<br />
					<br />
					<br /><html lang="pt_BR" xmlns="http://www.w3.org/1999/xhtml">

<div class="pull-right"><label>Versão </label>1.2.15
</div>
</html></div>
		</div>
					</div>
				</div><input type="hidden" name="javax.faces.ViewState" id="j_id1:javax.faces.ViewState:0" value="-3637081345274030030:820769556211880141" autocomplete="off" />
</form>
		</div>
	</div>
	<div id="footer" class="hidden-xs">

	<p class="text-center hidden-print" style="padding-top: 10px;">Rodovia Papa João Paulo II, 4.001 - Prédio
		Gerais (6º e 7º andares) - Bairro Serra Verde, Belo Horizonte/MG CEP 31630-901</p>
	</div><script type="text/javascript" src="/portalnfce/javax.faces.resource/js/bootstrap.min.js.xhtml?ln=resourcelib"></script>
	<span class="totop"><a href="#"><i class="fa fa-angle-up"></i></a></span></body>
</html>
`;

    beforeEach(() => {
        cheerioNFEParser = new CheerioNFEParser();
    });

    it('Should be able to get the nfe html data', () => {
        cheerioNFEParser.load(nfeHTML);
        const output = cheerioNFEParser.getData();

        expect(output).toEqual(
            expect.objectContaining({
                supermarket: 'COMERCIAL DAHANA LIMITADA SN 422',
                address: 'R GRAO MOGOL, 202, CARMO, 3106200 - BELO HORIZONTE, MG',
                cnpj: '00.070.509/0030-45',
                date: new Date('2024-06-07T12:26:37.000Z'),
                items: expect.arrayContaining([
                    {
                        code: '154923',
                        name: 'LEITE LVIDA PORTO ALEGRE 1L INTEG',
                        price: 105.8,
                        qty: 20,
                        unit: 'UN',
                    },
                    {
                        code: '93567',
                        name: 'CAFE PO FINO-GRAO 500G PC TRAD',
                        price: 33.98,
                        qty: 2,
                        unit: 'UN',
                    },
                    {
                        code: '156184',
                        name: 'ACUCAR CRISTAL DELTA 5kg-PC',
                        price: 17.9,
                        qty: 1,
                        unit: 'UN',
                    },
                ]),
            }),
        );
    });
});

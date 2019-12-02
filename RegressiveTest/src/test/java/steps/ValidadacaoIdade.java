package steps;

import org.openqa.selenium.WebDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pacot.Modulo;
import metodo.HooksValidacao;

public class ValidadacaoIdade {
	
	Modulo modulo = new Modulo();
	HooksValidacao validate = new HooksValidacao();

	WebDriver driver;

	@Before
	public void setUp() {
		
	}

	@After
	public void tearDown() {
		
	}

	@Given("^esteja na tela tela Swagger$")
	public void esteja_na_tela_tela_Swagger() throws Throwable {		
		driver = modulo.iniciacao();
		
	}

	@Given("^MapfreCap API \"([^\"]*)\"$")
	public void mapfrecap_API(String url) throws Throwable {
		//driver = modulo.iniciacao();
		validate.host(url, driver);
	}

	@When("^validar que estou na pagina MapfreCap API$")
	public void validar_que_estou_na_pagina_MapfreCap_API() throws Throwable {
		validate.valide(driver);
	}

	@When("^clicar em pessoa$")
	public void clicar_em_pessoa() throws Throwable {
		validate.pessoa(driver);
	}

	@When("^clicar em pessoa/validarIdade$")
	public void clicar_em_pessoa_validarIdade() throws Throwable {
		validate.idade(driver);
	}

	@When("^inserir dados com cpf \"([^\"]*)\" e \"([^\"]*)\"$")
	public void inserir_dados_com_cpf(String cpf) throws InterruptedException{
		validate.cpf(cpf, driver);
	}

	@When("^inserir dados com a data \"([^\"]*)\" e \"([^\"]*)\"$$")
	public void inserir_dados_com_a_data(String data, String cpf) throws InterruptedException{
		validate.date(data, cpf, driver);
	}

	@When("^clicar em Try it out$")
	public void clicar_em_Try_it_out() throws Throwable {
		validate.tryOut(driver);
	}

	@Then("^\"([^\"]*)\" para quem nasceu em \"([^\"]*)\"$")
	public void para_quem_nasceu_em(String result, String data) throws Throwable {
		validate.result(result, data, driver);
	}

}

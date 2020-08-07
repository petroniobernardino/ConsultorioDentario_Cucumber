import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.easetech.easytest.runner.DataDrivenTestRunner;
import org.junit.After;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

@RunWith(DataDrivenTestRunner.class)
public class cadastroCliente {
	private WebDriver navegador;
	
	@Dado("^Que acesso a pagina da Clinica Odontologica$")
	public void queAcessoAPaginaDaClinicaOdontologica() throws Throwable {
		// Prepara o navegador
        System.setProperty("webdriver.chrome.driver","C:\\Worten\\Automacao\\chromedriver.exe");		
		navegador = new ChromeDriver();
		navegador.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		// Navegando para a página do Portal Loja
		navegador.get("http://localhost:34693/Main.asp");		
	}

	@Quando("^Informo o Usuario, senha e inicia a Sessao$")
	public void informoOUsuarioSenhaEIniciaASessao() throws Throwable {
		// Digitar no input id "ctl00_PlaceHolderMain_signInControl_UserName" o nome do Usuario "petronio"
			navegador.findElement(By.id("login")).sendKeys("petronio");

		// Digitar no input id "ctl00_PlaceHolderMain_signInControl_password" a Senha "123456"
			navegador.findElement(By.id("senha")).sendKeys("123456");
		
		// Clicar no input de id "ctl00_PlaceHolderMain_signInControl_login" para Iniciar a Sessão
			navegador.findElement(By.id("valida")).click();
	}

	@Quando("^entro no link Cadastro Cliente$")
	public void entroNoLinkCadastroCliente() throws Throwable {
		navegador.findElement(By.id("cadastro")).click();
	}


	@Quando("^preencho os dados: \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void preenchoOsDados(String nome, String apelido, String caixa_postal, String localidade, String morada, String porta_andar, String documento, String nif) throws Throwable {
		   navegador.findElement(By.id("nome")).sendKeys(nome);
		   navegador.findElement(By.id("apelido")).sendKeys(apelido);
		   navegador.findElement(By.id("caixa_postal")).sendKeys(caixa_postal);
		   navegador.findElement(By.id("localidade")).sendKeys(localidade);
		   navegador.findElement(By.id("morada")).sendKeys(morada);
		   navegador.findElement(By.id("porta_andar")).sendKeys(porta_andar);
		   navegador.findElement(By.id("documento")).sendKeys(documento);
		   navegador.findElement(By.id("nif")).sendKeys(nif);
	}
	
	@Quando("^os \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void os(String telemovel, String email, String manha, String tarde, String noite, String faixa_etaria, String companhia, String plano) throws Throwable {
	      navegador.findElement(By.id("telemovel")).sendKeys(telemovel);
	      navegador.findElement(By.id("email")).sendKeys(email);
	      
	      if ( !manha.isEmpty() ) { navegador.findElement(By.id("manha")).click(); };
	      if ( !tarde.isEmpty() ) { navegador.findElement(By.id("tarde")).click(); };
	      if ( !noite.isEmpty() ) { navegador.findElement(By.id("noite")).click(); };
	      
	      navegador.findElement(By.id("faixa_etaria")).sendKeys(faixa_etaria);
	      if ( companhia.contentEquals("nao") ) { navegador.findElement(By.id("companhia2")).click(); };
	   
	      navegador.findElement(By.id("plano")).sendKeys(plano);
	}

	@Quando("^clico no link Salvar$")
	public void clico_no_link_Salvar() throws Throwable {
		navegador.findElement(By.id("salvar")).click();
	}
	
	@Entao("^Valido se o cliente foi cadastrado com sucesso$")
	public void validoSeOClienteFoiCadastradoComSucesso() throws Throwable {
		String mensagemretorno = navegador.findElement(By.id("retorno")).getText();
		assertEquals("Usuário cadastrado com sucesso !!!",mensagemretorno);
	}

	@Entao("^Fecho o navegador$")
	public void fecho_o_navegador() throws Throwable {
		 navegador.quit();
    }
	
}

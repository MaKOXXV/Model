package runner;
import java.io.File;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/test/resources/features"},
	glue={"steps"},	
	monochrome=true,
	//tags={"@history11"},
	plugin = {"json:target/negative/cucumber.json", "pretty", "html:target/negative/cucumber.html","com.cucumber.listener.ExtentCucumberFormatter"})
public class RunCuke{

	
	@BeforeClass
	 public static void setup() {
		
		/***
		  ExtentCucumberFormatter.initiateExtentCucumberFormatter();

	        // Loads the extent config xml to customize on the report.
	        ExtentCucumberFormatter.loadConfig(new File("src/extent-config.xml"));

	        // User can add the system information as follows
	        ExtentCucumberFormatter.addSystemInfo("Browser Name", "Firefox");
	        ExtentCucumberFormatter.addSystemInfo("Browser version", "v47.0.1");
	        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v2.53.1");
		***/
		
        // Inicia��o
		
		SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy_hhmmss");
		Date curDate = new Date(0);
		String strDate = sdf.format(curDate);
		String fileName = "E:\\Extent_Reports\\report" + strDate+".html";
		File newFile = new File(fileName);
        //ExtentCucumberFormatter.initiateExtentCucumberFormatter(newFile,false);

		ExtentCucumberFormatter.initiateExtentCucumberFormatter(new File("ExtenReports/extentreports"+ strDate +".html"),false);
        //Extend em XML
        ExtentCucumberFormatter.loadConfig(new File("src/test/resources/extent-config.xml"));

        //Informa��es de instanciamento
        ExtentCucumberFormatter.addSystemInfo("Browser Name", "GoogleChrome");
        ExtentCucumberFormatter.addSystemInfo("Browser version", "v76.0");
        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v2.53.0");

        // Informa��es por HasMap
        Map systemInfo = new HashMap();
        systemInfo.put("Cucumber version", "v1.2.3");
        systemInfo.put("Extent Cucumber Reporter version", "v1.1.0");
        ExtentCucumberFormatter.addSystemInfo(systemInfo);
    }
}


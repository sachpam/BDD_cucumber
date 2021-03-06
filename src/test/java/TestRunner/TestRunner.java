package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\smsps\\Desktop\\BDD_Project\\BDD\\BDD\\src\\test\\resources\\features\\LoginProfile.feature",
        glue={"stepDefinition"},
        format= {"pretty","html:test-output_1",
                "json:target/cucumber-reports/CucumberTestReport.json"},
        plugin={"pretty:target/cucumber-htmlreport.text", "json:target/cucmber-report.json"},
        monochrome = true

)
public class TestRunner {
}

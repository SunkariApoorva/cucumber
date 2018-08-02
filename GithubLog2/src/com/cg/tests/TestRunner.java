package com.cg.tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"json:Folder_Name/cucumber.json",},
		features= {"features"},  
		glue= {"com.cg.github.stepdefinitions"} ,
		dryRun=true,strict=false,monochrome=false,
		tags= "@sanity,@regression"
		
		)


public class TestRunner {

}

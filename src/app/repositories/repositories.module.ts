import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';
import {
	GridModule,
	TableModule,
	LinkModule,
	PaginationModule,
	PanelModule,
	ToggleModule,
	ButtonModule,
	SearchModule,

} from 'carbon-components-angular';

import {
	SettingsModule,
	DeleteModule,
	FilterModule,
	SaveModule,
	DownloadModule,
	AddModule
} from "@carbon/icons-angular";

import { RepoTableComponent } from './repo-table/repo-table.component';
// import { Button } from 'protractor';


@NgModule({
	declarations: [RepoPageComponent, RepoTableComponent],
	imports: [
		CommonModule,
		RepositoriesRoutingModule,
		GridModule,
		TableModule,
		LinkModule,
		PaginationModule,
		PanelModule,
		ToggleModule,
		ButtonModule,
		SettingsModule,
		DeleteModule,
		FilterModule,
		SaveModule,
		DownloadModule,
		AddModule,
		SearchModule
	]
})
export class RepositoriesModule { }

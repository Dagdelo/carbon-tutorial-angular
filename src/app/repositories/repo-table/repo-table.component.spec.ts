import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { RepoTableComponent } from './repo-table.component';

import { FormsModule } from '@angular/forms';
import {
	GridModule,
	TableModule,
	SearchModule,
	LinkModule,
	PaginationModule,
	PanelModule,
	ToggleModule,
	ButtonModule,
	DialogModule,
	NFormsModule
} from 'carbon-components-angular';

import {
	SettingsModule,
	DeleteModule,
	FilterModule,
	SaveModule,
	DownloadModule,
	AddModule
} from '@carbon/icons-angular';

describe('RepoTableComponent', () => {
	let component: RepoTableComponent;
	let fixture: ComponentFixture<RepoTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RepoTableComponent ],
			imports: [
				TableModule,
				LinkModule,
				PaginationModule,
				ApolloTestingModule,
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
				SearchModule,
				FormsModule,
				DialogModule,
				NFormsModule
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RepoTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

Summary:	scantool_net is a GPL OBD2 scanner gui interface
Name:		scantool_net
Version: 	1.13
Release: 	1%{?dist}
Epoch:		1
License:	GPLv2
Group:		Applications/Other
Source0:	http://scantool.net/download/scantool_net113src.zip
Source1:	%{name}.desktop
Patch0:		linux_compile.patch
Patch1:		disable_fullscrn.patch
URL:		http://scantool.net
BuildRoot:	 %{_tmppath}/%{name}-%{version}-%{release}-root-%(%{__id_u} -n)	

BuildRequires:	allegro-devel
BuildRequires:	dzcomm
BuildRequires:	desktop-file-utils

#Requires:	allegro-devel
Requires:	dzcomm

%description
scantool_net is an opensource tool used to connect with and display
information from OBD2 scanners like the ones sold at scantool.net.
The user must have access to /dev/ttyS<num>.

%prep
%setup -c -n scantool_net-%{version} -q
%patch0 -p0
%patch1 -p0

%build
make %{?_smp_mflags}

%install
rm -rf $RPM_BUILD_ROOT

make install DESTDIR=$RPM_BUILD_ROOT
desktop-file-install --vendor="fedora" --dir=%{buildroot}%{_datadir}/applications %{SOURCE1}

%clean
rm -rf $RPM_BUILD_ROOT

%files
/*
#%{_sysconfdir}/*
#%{_bindir}/*
#%{_libdir}/debug/*

%changelog
* Sun Jan 13 2008 Ian Hands <iphands@yahoo.com>
- First try at an RPM

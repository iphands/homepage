Summary:	Dzcomm a RS-232 API/lib
Name:		dzcomm
Version: 	0.9.9i
Release: 	3%{?dist}
License:	GPLv2
Group:		Development/Libraries
Source0:	http://downloads.sourceforge.net/sourceforge/%{name}/dz099i.zip
Patch0:		DESTDIR.patch
Patch1:		configure.patch
URL:		http://dzcomm.sourceforge.net
#BuildRoot:	 %{_tmppath}/%{name}-%{version}-%{release}-%(%{__id_u} -n)
BuildRoot:	 %(mktemp -ud %{_tmppath}/%{name}-%{version}-%{release}-XXXXXX)

#Requires:	allegro-devel
BuildRequires:	allegro-devel
BuildRequires:	texinfo

%description
Dzcomm is a RS-232 API for as many OSes / platforms as we can achieve.
Originally designed to work on MS-DOS alongside the Allegro games
programming library, Dzcomm can now work alongside the Allegro library
as well as independently.  Dzcomm works on some *nixes as well.

%prep
%setup -n dz099i -q
sh fixunix.sh
%patch0 -p0
%patch1 -p0

%build
#%configure
./configure
make %{?_smp_mflags} CFLAGS="%{optflags}" depend
make %{?_smp_mflags} CFLAGS="%{optflags}"

%install
rm -rf $RPM_BUILD_ROOT
make DESTDIR=$RPM_BUILD_ROOT install

%clean
rm -rf $RPM_BUILD_ROOT

%files
%defattr(-,root,root,-)
%{_oldincludedir}/*
/%{_lib}/*

%changelog
* Sun Feb 17 2008 Ian Hands <iphands@yahoo.com>
- Fixed configure.patch to honor Fedora compile flags. Fixed BuildRoot to match Fedora guidelines. (release 3)

* Tue Feb 12 2008 Ian Hands <iphands@yahoo.com>
- Patched configure to remove -O3, -ffast-math, and -fomit-frame-pointer (release 2)

* Sun Jan 13 2008 Ian Hands <iphands@yahoo.com>
- First try at an RPM
